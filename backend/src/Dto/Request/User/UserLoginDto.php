<?php

namespace App\Dto\Request\User;

class UserLoginDto
{
    public function __construct(
        public string $email,
        public string $password
    )
    {
    }
}
