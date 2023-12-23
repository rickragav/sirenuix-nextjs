// components/InstagramEmbed.js
import React from 'react';

const InstagramEmbed = () => {
  const instagramEmbedCode = `
    <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/C06YIyLrFNG/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
      <div style="padding:16px;">
        <a href="https://www.instagram.com/p/C06YIyLrFNG/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">
          <div style=" display: flex; flex-direction: row; align-items: center;">
            <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div>
            <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;">
              <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div>
              <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div>
            </div>
          </div>
          <div style="padding: 19% 0;"></div>
          <div style="display:block; height:50px; margin:0 auto 12px; width:50px;">
            <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">
              <!-- SVG content goes here -->
            </svg>
          </div>
          <div style="padding-top: 8px;">
            <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div>
          </div>
          <!-- Additional content goes here -->
        </a>
        <!-- Additional content goes here -->
      </div>
    </blockquote>
    <script async src="//www.instagram.com/embed.js"></script>
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: instagramEmbedCode }} />
  );
};

export default InstagramEmbed;
