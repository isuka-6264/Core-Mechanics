<?php

class User {
    private string $usersFile;

    public function __construct() {
        $this->usersFile = __DIR__ . '/../config/users.json';
    }

    public function getAll(): array {
        $json = file_get_contents($this->usersFile);
        return json_decode($json, true) ?? [];
    }

    private function save(array $users): void {
        file_put_contents($this->usersFile, json_encode($users, JSON_PRETTY_PRINT));
    }

    public function findById(int $id): ?array {
        foreach ($this->getAll() as $user) {
            if ($user['id'] === $id) return $user;
        }
        return null;
    }

    public function findByEmail(string $email): ?array {
        foreach ($this->getAll() as $user) {
            if ($user['email'] === $email) return $user;
        }
        return null;
    }

    public function create(string $name, string $email, string $password): array {
        $users = $this->getAll();
        $newUser = [
            'id' => count($users) > 0 ? max(array_column($users, 'id')) + 1 : 1,
            'name' => $name,
            'email' => $email,
            'password_hash' => password_hash($password, PASSWORD_DEFAULT),
        ];
        $users[] = $newUser;
        $this->save($users);
        unset($newUser['password_hash']);
        return $newUser;
    }

    public function updatePassword(int $id, string $newPassword): bool {
        $users = $this->getAll();
        foreach ($users as &$user) {
            if ($user['id'] === $id) {
                $user['password_hash'] = password_hash($newPassword, PASSWORD_DEFAULT);
                $this->save($users);
                return true;
            }
        }
        return false;
    }

    public function delete(int $id): bool {
        $users = $this->getAll();
        $filtered = array_filter($users, fn($u) => $u['id'] !== $id);
        if (count($filtered) === count($users)) return false;
        $this->save(array_values($filtered));
        return true;
    }

    public function verifyPassword(string $password, string $hash): bool {
        return password_verify($password, $hash);
    }
}