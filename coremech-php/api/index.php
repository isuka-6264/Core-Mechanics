<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once __DIR__ . '/../controllers/AuthController.php';

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true) ?? [];

$uri = $_SERVER['REQUEST_URI'];
$path = parse_url($uri, PHP_URL_PATH);
$path = rtrim($path, '/');

$controller = new AuthController();

if ($method === 'POST' && str_ends_with($path, '/login')) {
    echo json_encode($controller->login($input));
} elseif ($method === 'POST' && str_ends_with($path, '/logout')) {
    echo json_encode($controller->logout());
} else {
    http_response_code(404);
    echo json_encode(['status' => 'error', 'message' => 'Endpoint not found']);
}