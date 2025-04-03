package com.email.writer.app;

public class EmailRequest {
    private String emailContent;
    private String tone;
    private String length;
    private String instruction;

    public EmailRequest() {
    }

    public EmailRequest(String emailContent, String tone, String length, String instruction) {
        this.emailContent = emailContent;
        this.tone = tone;
        this.length = length;
        this.instruction = instruction;
    }

    public String getEmailContent() {
        return emailContent;
    }

    public void setEmailContent(String emailContent) {
        this.emailContent = emailContent;
    }

    public String getTone() {
        return tone;
    }

    public void setTone(String tone) {
        this.tone = tone;
    }

    public String getLength() {
        return length;
    }

    public void setLength(String length) {
        this.length = length;
    }

    public String getInstruction() {
        return instruction;
    }

    public void setInstruction(String instruction) {
        this.instruction = instruction;
    }
}
