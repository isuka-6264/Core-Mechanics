<?php

require_once __DIR__ . '/../models/User.php';

class UserController {
    private User $userModel;

    public function __construct() {
        $this->userModel = new User();
    }

    public function register(array $input): array {
        $name = trim($input['name'] ?? '');
        $email = trim($input['email'] ?? '');
        $password = trim($input['password'] ?? '');

        if (empty($name) || empty($email) || empty($password)) {
            http_response_code(400);
            return ['status' => 'error', 'message' => 'All fields are required'];
        }

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            return ['status' => 'error', 'message' => 'Invalid email format'];
        }

        if (strlen($password) < 6) {
            http_response_code(400);
            return ['status' => 'error', 'message' => 'Password must be at least 6 characters'];
        }

        if ($this->userModel->findByEmail($email)) {
            http_response_code(409);
            return ['status' => 'error', 'message' => 'Email already registered'];
        }

        $user = $this->userModel->create($name, $email, $password);
        http_response_code(201);
        return ['status' => 'success', 'message' => 'User registered', 'user' => $user];
    }

    public function login(array $input): array {
        $email = trim($input['email'] ?? '');
        $password = trim($input['password'] ?? '');

        if (empty($email) || empty($password)) {
            http_response_code(400);
            return ['status' => 'error', 'message' => 'Email and password are required'];
        }

        $user = $this->userModel->findByEmail($email);

        if (!$user) {
            http_response_code(401);
            return ['status' => 'error', 'message' => 'User not found'];
        }

        if (!$this->userModel->verifyPassword($password, $user['password_hash'])) {
            http_response_code(401);
            return ['status' => 'error', 'message' => 'Invalid password'];
        }

        unset($user['password_hash']);
        return ['status' => 'success', 'message' => 'You are logged in', 'user' => $user];
    }

    public function getAll(): array {
        $users = $this->userModel->getAll();
        $safe = array_map(function($u) {
            unset($u['password_hash']);
            return $u;
        }, $users);
        return ['status' => 'success', 'users' => array_values($safe)];
    }

    public function getOne(int $id): array {
        $user = $this->userModel->findById($id);
        if (!$user) {
            http_response_code(404);
            return ['status' => 'error', 'message' => 'User not found'];
        }
        unset($user['password_hash']);
        return ['status' => 'success', 'user' => $user];
    }

    public function updatePassword(int $id, array $input): array {
        $newPassword = trim($input['password'] ?? '');

        if (empty($newPassword)) {
            http_response_code(400);
            return ['status' => 'error', 'message' => 'Password is required'];
        }

        if (strlen($newPassword) < 6) {
            http_response_code(400);
            return ['status' => 'error', 'message' => 'Password must be at least 6 characters'];
        }

        if (!$this->userModel->findById($id)) {
            http_response_code(404);
            return ['status' => 'error', 'message' => 'User not found'];
        }

        $this->userModel->updatePassword($id, $newPassword);
        return ['status' => 'success', 'message' => 'Password updated'];
    }

    public function delete(int $id): array {
        if (!$this->userModel->findById($id)) {
            http_response_code(404);
            return ['status' => 'error', 'message' => 'User not found'];
        }
        $this->userModel->delete($id);
        return ['status' => 'success', 'message' => 'User deleted'];
    }
}