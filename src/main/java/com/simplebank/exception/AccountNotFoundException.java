package com.simplebank.exception;

public class AccountNotFoundException extends SimpleBankException {
    public AccountNotFoundException(String message) {
        super(message);
    }

    public AccountNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}