<?php

namespace App\Dto\Request\User;

readonly class UserRegisterDto
{
    public function __construct(
        public string $email,
        public string $password
    )
    {
    }
}
