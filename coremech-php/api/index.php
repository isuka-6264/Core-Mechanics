<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once __DIR__ . '/../controllers/AuthController.php';
require_once __DIR__ . '/../controllers/UserController.php';

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true) ?? [];

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = rtrim($uri, '/');

// Extract last segment and check for ID
$segments = explode('/', $uri);
$last = end($segments);
$secondLast = $segments[count($segments) - 2] ?? '';

$authController = new AuthController();
$userController = new UserController();

// POST /api/v1/register
if ($method === 'POST' && $last === 'register') {
    echo json_encode($userController->register($input));
}
// POST /api/v1/login
elseif ($method === 'POST' && $last === 'login') {
    echo json_encode($userController->login($input));
}
// POST /api/v1/logout
elseif ($method === 'POST' && $last === 'logout') {
    echo json_encode($authController->logout());
}
// GET /api/v1/users
elseif ($method === 'GET' && $last === 'users') {
    echo json_encode($userController->getAll());
}
// GET /api/v1/users/{id}
elseif ($method === 'GET' && $secondLast === 'users' && is_numeric($last)) {
    echo json_encode($userController->getOne((int)$last));
}
// PUT or PATCH /api/v1/users/{id}
elseif (in_array($method, ['PUT', 'PATCH']) && $secondLast === 'users' && is_numeric($last)) {
    echo json_encode($userController->updatePassword((int)$last, $input));
}
// DELETE /api/v1/users/{id}
elseif ($method === 'DELETE' && $secondLast === 'users' && is_numeric($last)) {
    echo json_encode($userController->delete((int)$last));
}
else {
    http_response_code(404);
    echo json_encode(['status' => 'error', 'message' => 'Endpoint not found']);
}