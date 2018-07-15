<?php


namespace App\Mailer;

use Symfony\Component\Validator\Constraints as Assert;

class Mail
{

    /**
     * @var string
     * @Assert\Email(
     *     message = "The email '{{ value }}' is not a valid email.",
     * )
     */
    private $sender;

    /**
     * @var string
     * @Assert\Email(
     *     message = "The email '{{ value }}' is not a valid email.",
     * )
     */
    private $receiver;

    /**
     * @var string
     */
    private $subject;

    /**
     * @var string
     */
    private $body;

    /**
     * @return string
     */
    public function getSender() : ?string
    {
        return $this->sender;
    }

    /**
     * @param string $sender
     */
    public function setSender(string $sender) : void
    {
        $this->sender = $sender;
    }

    /**
     * @return string
     */
    public function getReceiver() : ?string
    {
        return $this->receiver;
    }

    /**
     * @param string $receiver
     */
    public function setReceiver(string $receiver) : void
    {
        $this->receiver = $receiver;
    }

    /**
     * @return string
     */
    public function getSubject() : ?string
    {
        return $this->subject;
    }

    /**
     * @param string $subject
     */
    public function setSubject(string $subject) : void
    {
        $this->subject = $subject;
    }

    /**
     * @return string
     */
    public function getBody() : ?string
    {
        return $this->body;
    }

    /**
     * @param string $body
     */
    public function setBody(string $body) : void
    {
        $this->body = $body;
    }

    /**
     * @param array $raw
     *
     * @return Mail
     */
    public static function fromArray(array $raw) : self
    {
        $mail = new self();
        $mail->setSender($raw['sender'] ?? 'noreply@example.de');
        $mail->setReceiver($raw['receiver']);
        $mail->setSubject($raw['subject']);
        $mail->setBody($raw['body']);

        return $mail;
    }

}