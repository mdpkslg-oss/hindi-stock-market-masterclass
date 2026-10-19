# Hindi Stock Market MasterClass — website starter

This is a mobile-first static website starter for your ₹2,999 Hindi Stock Market MasterClass.

## Included
- `index.html`: course sales/landing page
- `student.html`: classroom interface mock-up
- `style.css`: responsive styling
- `script.js`: 17 sample curriculum entries and classroom interactions
- `privacy.html`, `terms.html`, `refund.html`: policy starter pages

## Important limitations
This starter is a **front-end only** website. It does not yet:
- accept payments,
- create or authenticate student accounts,
- automatically enroll buyers,
- securely protect course videos,
- store student progress.

The Buy Course button intentionally warns that checkout is not connected. Do not accept payment or upload private lesson URLs until payment verification, authentication, enrollment checks and protected video playback have been implemented.

The 17 lesson titles are examples. Replace them with the exact titles of your existing videos.

## Publish free using GitHub Pages (Android-friendly)
1. Create/sign in to a GitHub account in Chrome.
2. Create a new public repository, for example `hindi-stock-market-masterclass`.
3. Upload all files from this folder to the repository root. GitHub's website can upload files from your phone; if selecting multiple files is awkward, upload them in batches.
4. In the repository, open **Settings → Pages**.
5. Under the build/deployment source, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
6. Wait for GitHub Pages to publish and open the provided `github.io` address.

## Own domain
A custom domain name is normally a separate paid registration. Free hosting does not mean the domain itself is free. If you already own a domain, GitHub Pages can support connecting it; you must configure the DNS records with your domain registrar and the Pages settings. Do not buy a domain until the site works on its temporary address.

## How to make it a real course business
Choose an LMS/backend that supports:
1. Indian payments (for example UPI/cards through an approved payment gateway).
2. Payment-webhook verification on the server.
3. Automatic enrollment after verified successful payment.
4. Student login and password reset.
5. Private/signed video streaming rather than public direct video URLs.
6. Admin course and student management.
7. Refund handling, privacy terms and support contact.

Never place payment secret keys, API secrets, passwords, or private video links in front-end HTML/JavaScript. A browser-only site cannot securely verify purchases.
