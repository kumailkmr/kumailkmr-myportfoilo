import { ImageResponse } from 'next/og';
 
// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';
 
// Image generation
export default async function Icon() {
  // Read the logo image file from the public directory
  const fs = await import('fs');
  const path = await import('path');
  const imageBuffer = fs.readFileSync(path.join(process.cwd(), 'public/images/logo.png'));
  const imageData = `data:image/png;base64,${imageBuffer.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          overflow: 'hidden',
          background: '#fff',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageData}
          alt="Kumail Kmr"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
