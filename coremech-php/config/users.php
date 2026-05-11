<?php

$users = [
    'admin' => [
        'id' => 1,
        'password_hash' => password_hash('admin123', PASSWORD_DEFAULT),
        'role'=> 'admin',
    ],
    'user'=> [
        'id'=> 2,
        'password_hash'=> password_hash('user123', PASSWORD_DEFAULT),
        'role'=> 'user',
    ],
];