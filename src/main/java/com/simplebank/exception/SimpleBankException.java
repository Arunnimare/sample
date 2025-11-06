package com.simplebank.exception;

public class SimpleBankException extends RuntimeException {
    public SimpleBankException(String message) {
        super(message);
    }

    public SimpleBankException(String message, Throwable cause) {
        super(message, cause);
    }
}