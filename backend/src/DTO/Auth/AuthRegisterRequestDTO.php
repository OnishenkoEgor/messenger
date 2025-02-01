<?php

namespace App\DTO\Auth;

readonly class AuthRegisterRequestDTO
{
    public function __construct(
        public string $email,
        public string $name,
        public string $password
    )
    {
    }
}
