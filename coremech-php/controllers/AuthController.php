<?php

require_once __DIR__ . '/../models/User.php';

class AuthController {
    private User $userModel;
    private string $logFile;

    public function __construct() {
        $this->userModel = new User();
        $dir = __DIR__ . '/../logs';
        if (!is_dir($dir)) mkdir($dir, 0777, true);
        $this->logFile = $dir . '/auth.log';;
    }

    private function log(string $login, string $action): void {
        $time = date('Y-m-d H:i:s');
        $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
        $line = "$time | ip=$ip | login=$login | action=$action" . PHP_EOL;
        file_put_contents($this->logFile, $line, FILE_APPEND);
    }

    public function login(array $input): array {
        $login = trim($input['login'] ?? '');
        $password = trim($input['password'] ?? '');

        if (empty($login) || empty($password)) {
            $this->log($login,'FAIL_LOGIN');
            return ['status' => 'error', 'message' => 'Login and password are required'];
        }

        $user = $this->userModel->findByLogin($login);

        if (!$user) {
            $this->log($login,'FAIL_LOGIN_USER_NOT_FOUND');
            return ['status'=> 'error', 'message'=> 'User not found'];
        }

        if (!$this->userModel->verifyPassword($password, $user['password_hash'])) {
            $this->log($login,'FAIL_LOGIN');
            return ['status'=> 'error', 'message'=> 'Invalid password'];
        }

        session_start();
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['login'] = $login;
        $_SESSION['role'] = $user['role'];

        $this->log($login,'SUCCESS_LOGIN');
        return ['status'=> 'success','message'=> 'You are logged in', 'role' => $user['role']];
    }
    public function logout(): array {
        session_start();
        $login = $_SESSION['login'] ?? 'unknown';
        session_destroy();
        $this->log($login,'LOGOUT');
        return ['status'=> 'success','message'=> 'Logged out'];
    }
    
}