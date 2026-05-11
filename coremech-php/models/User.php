<?php

class User {
    private string $usersFile;

    public function __construct() {
        $this->usersFile = __DIR__ ."/../config/users.php";
    }

    public function getAll(): array {
        require $this->usersFile;
        return $users;
    }

    public function findByLogin(string $login): ?array {
        $users = $this->getAll();
        return $users[$login] ?? null;
    }

    public function verifyPassword(string $password, string $hash): bool {
        return password_verify($password, $hash);
    }
}