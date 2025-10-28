SmilePlus Dental Clinic - GitHub Pages upload instructions (Full-screen hero version)

1) Create a new public GitHub repository (e.g., smileplus-clinic).
2) Upload all files and the 'assets' folder to the repository root:
   - index.html
   - style.css
   - script.js
   - README.txt
   - assets/ (logo.png, hero.jpg, clinic1.jpg, clinic2.jpg)

3) In your repo -> Settings -> Pages -> Build and deployment ->
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
   - Save

4) After a couple minutes, open:
   https://YOUR_GITHUB_USERNAME.github.io/smileplus-clinic/

Elfsight Google Reviews widget setup:
1. Go to: https://elfsight.com/google-reviews-widget/ and create a free widget.
2. When asked for place, paste your Google Business Place URL:
   https://g.page/r/CZ_2i4drLOxCEBE/review
3. Customize and save; copy the provided <script> snippet.
4. Open index.html in your repo, find <!-- ELFSIGHT_WIDGET --> and paste the snippet there.
5. Commit changes; widget will load and show reviews.

If you want, paste the Elfsight snippet here and I will insert it into index.html for you.