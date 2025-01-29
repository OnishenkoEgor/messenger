<?php

namespace App\DTO\Auth;

readonly class LoginUserDTO
{
    public function __construct(
        public string $email,
        public string $password
    )
    {
    }
}
