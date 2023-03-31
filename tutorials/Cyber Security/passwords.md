---
title: "Passwords"
subtitle: "How to make and manage secure passwords"
---

# Passwords

Passwords make up your online life. If you reuse the same password on many sites, and one of these sites steals your password, they can may gain access to your Google account. (Note that the site does not need to be malicious to get access to your password, learn about [dataleaks](#dataleaks))

Things they can find out about you, if they have access to your [Google account](https://myaccount.google.com/personal-info)

1. Full Name
2. Birthdate
3. Gender
4. Phone Number
5. Your email and associated emails
6. Your address
7. The language(s) you speak
8. The previous locations of your phone (including current location)
9. Search history (Google and Youtube)
10. Your emails

And countless other websites that you log in with your Google account.

An insecure password, even just one, can lead to **your identity being stolen**.

## Creating a secure password

Now that we have established the importance of passwords, two simple rules to make sure that hackers can not guess your password.

1. Passwords should contain different characters [a list can be found here](#special-characters)

2. Do not reuse the same password twice on two websites.

This may seem complicated to try to remember, and personally I do not remember any of my passwords. I use a password manager!

I highly, highly, highly, recommend that you use one as well.

**Do not store passwords with the default chrom "Do you want to save your password?"**. It is common for attackers to use malware to extract these passwords from Chrome, Edge, Firefox, or any other browser. Do not save them.

Click [here](chrome://settings/passwords) and turn off "Offer to save passwords" and "Auto Sign-In."

![](/images/cyber-security/passwords/offer-to-save-passwords.png)

You can delete all passwords from your browser by doing the following:

1. Open your [privacy settings page](chrome://settings/privacy)
2. Click on Clear browsing data

![](/images/cyber-security/passwords/clear-browsing-data.png)

3. Select advanced
4. Set time range to be "All time"
5. Select Passwords and other sign-in data

![](/images/cyber-security/passwords/clear-passwords.png)

6. Click "Clear data"

### Password managers

A password manager is an encrypted "vault" where all of your email and password combinations are stored. To access this vault you will need a "master password," one password that you have to memorize. **Your master password should be extremely secure and you need to remember it**.

Password managers are a rare exception in the cyber security industry, where they offer both convenience and additional security. They can fill in your passwords automatically for you on your phone or computer, while also creating long randomized character combinations that are difficult to memorize and more importantly difficult to crack!

Some great options are listed here:

| Password manager                      | Tutorial                                                                              |
| ------------------------------------- | ------------------------------------------------------------------------------------- |
| [Bitwarden](https://bitwarden.com/)   | [Video walkthrough](https://bitwarden.com/learning/pm-101-getting-started-as-a-user/) |
| [1Password](https://1password.com/)   | [Writeup](https://support.1password.com/explore/get-started/)                         |
| [Dashlane](https://www.dashlane.com/) | None                                                                                  |
| [NordPass](https://nordpass.com/)     | None                                                                                  |

## Dataleaks

Dataleaks (or Databreaches) refer to when personal data is published online because of website hacks. This means that your address, phone number, ID card number, bank details, emails, and even your passwords could be found on the internet. They are sold on the **Dark web** to people who want to commit any illegal activities such as Identity Fraud.

If a website gets hacked, and the hackers download a list of passwords, these passwords will be "hashed." This means that they will be gibberish, and the hackers will need to crack them. The most common forms of attack just try to guess the passwords at thousands or millions of passwords per second.

### Damage control

You have no control over where or when your data can be leaked, but that does not mean that we cannot prevent some of the damage.

[Change your passwords](#creating-a-secure-password) starting with the most important sites.

### How can I figure out if my data has been comprimised?

A website to figure out if your accounts have been compromised exists. It is called [haveibeenpwned.com](https://haveibeenpwned.com), it was created by an Australian Web Security consultant called [Troy Hunt](https://en.wikipedia.org/wiki/Troy_Hunt).

I suggest putting in your email and phone number to check if they have been compromised. However I will never recommend putting your password on sites, even if I personally trust them. However the option is there, and you may do this at your own discression.

# Special characters

[Go back](#creating-a-secure-password)

| Rule                 | example           |
| -------------------- | ----------------- |
| Lowercase characters | aiwbeoiv          |
| Uppercase characters | AIWBEOIV          |
| Numbers              | 518345            |
| Special characters   | !@#$%^&\*         |
| 8 to 20 characters   | 22K#@%h4          |
| No words             | ~~DogOwner5436$~~ |
