import React from 'react'
import Image from 'next/image'

/* ------| Estilos |------ */
import { Box, FavoriteButton, AlbumImage, Favorite, Info } from "./styles"

export const Music = () => {
  const [ favorite, setFavorite ] = React.useState(false)
  return (
    <Box>
        <AlbumImage>
          <Image src="data:image/png;base64,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" layout="fill" />
        </AlbumImage>
        <Favorite>
            {favorite ? (
              <FavoriteButton
                onClick={() => setFavorite((favorite) => !favorite)}
                animate={{
                  rotate: [ 0, -5, 5, -5, 5, -5, 5, 0 ],
                  x: [ 0, -2, 2, -2, 2, -2, 0 ],
                  color: '#1DB954'
                }}
                type="button"
                >
                <svg
                  width="24" height="24"
                  viewBox="0 0 43 43" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <mask id="path-1-inside-1" fill="white">
                    <path d="M7.09086 14.1025C3.19655 17.9968 3.19655 24.3108 7.09087 28.2051C7.09087 28.2051 19.6742 41.2989 21.2459 41.2988C22.8176 41.2988 35.296 28.2051 35.296 28.2051C38.9962 24.4461 39.1903 17.9968 35.296 14.1025C31.5411 10.3476 25.5368 10.2132 21.6208 13.6992C21.4754 13.8286 21.2219 14.1025 21.1934 14.1025C21.1649 14.1025 20.9114 13.8286 20.766 13.6992C16.85 10.2132 10.8457 10.3476 7.09086 14.1025Z"/>
                  </mask>
                  <path d="M7.09086 14.1025C3.19655 17.9968 3.19655 24.3108 7.09087 28.2051C7.09087 28.2051 19.6742 41.2989 21.2459 41.2988C22.8176 41.2988 35.296 28.2051 35.296 28.2051C38.9962 24.4461 39.1903 17.9968 35.296 14.1025C31.5411 10.3476 25.5368 10.2132 21.6208 13.6992C21.4754 13.8286 21.2219 14.1025 21.1934 14.1025C21.1649 14.1025 20.9114 13.8286 20.766 13.6992C16.85 10.2132 10.8457 10.3476 7.09086 14.1025Z" fill="currentColor"/>
                  <path d="M7.09087 28.2051L9.97495 25.4334L9.9474 25.4048L9.91929 25.3766L7.09087 28.2051ZM35.296 28.2051L32.4454 25.3991L32.4227 25.4221L32.4004 25.4455L35.296 28.2051ZM21.2459 41.2988L21.246 45.2988L21.2459 41.2988ZM21.1934 14.1025L21.1934 10.1025L21.1933 10.1025L21.1934 14.1025ZM21.6208 13.6992L18.9612 10.7115L18.9612 10.7115L21.6208 13.6992ZM20.766 13.6992L18.1064 16.6869L18.1064 16.6869L20.766 13.6992ZM9.91929 25.3766C7.58707 23.0444 7.58707 19.2631 9.91929 16.9309L4.26244 11.2741C-1.19398 16.7305 -1.19398 25.5771 4.26244 31.0335L9.91929 25.3766ZM32.4676 16.9309C34.7379 19.2012 34.6755 23.1335 32.4454 25.3991L38.1467 31.0111C43.3168 25.7587 43.6428 16.7924 38.1244 11.2741L32.4676 16.9309ZM21.246 45.2988C22.4278 45.2988 23.3405 44.7916 23.5622 44.672C23.9637 44.4554 24.3411 44.1987 24.6557 43.9696C25.297 43.5025 26.0221 42.8954 26.7512 42.2519C28.2268 40.9496 29.9969 39.2506 31.6704 37.5986C33.3542 35.9365 34.9832 34.2792 36.1886 33.0404C36.792 32.4202 37.2912 31.903 37.64 31.5402C37.8145 31.3587 37.9515 31.2158 38.0454 31.1177C38.0923 31.0687 38.1284 31.0309 38.153 31.0051C38.1653 30.9922 38.1748 30.9824 38.1812 30.9756C38.1845 30.9722 38.187 30.9696 38.1887 30.9677C38.1896 30.9668 38.1903 30.9661 38.1908 30.9656C38.191 30.9653 38.1912 30.9651 38.1914 30.965C38.1915 30.9648 38.1917 30.9646 35.296 28.2051C32.4004 25.4455 32.4004 25.4455 32.4004 25.4455C32.4003 25.4455 32.4003 25.4456 32.4001 25.4457C32.3999 25.446 32.3994 25.4465 32.3988 25.4472C32.3975 25.4485 32.3955 25.4506 32.3927 25.4535C32.3872 25.4594 32.3787 25.4682 32.3673 25.4801C32.3446 25.5039 32.3105 25.5396 32.2656 25.5865C32.1759 25.6803 32.0433 25.8186 31.8735 25.9952C31.5338 26.3484 31.0458 26.8542 30.4549 27.4615C29.2714 28.6778 27.6826 30.2939 26.0503 31.9053C24.4078 33.5267 22.7635 35.1012 21.4575 36.2539C20.7957 36.8379 20.288 37.2538 19.9461 37.5028C19.7691 37.6317 19.7172 37.6564 19.7632 37.6316C19.7875 37.6184 19.9016 37.5574 20.0849 37.4923C20.2337 37.4394 20.658 37.2988 21.2458 37.2988L21.246 45.2988ZM7.09087 28.2051C4.20678 30.9767 4.20691 30.9769 4.20709 30.977C4.20722 30.9772 4.20745 30.9774 4.20769 30.9777C4.20819 30.9782 4.20888 30.9789 4.20975 30.9798C4.21151 30.9816 4.21402 30.9843 4.21728 30.9876C4.2238 30.9944 4.23331 31.0043 4.24571 31.0172C4.27053 31.043 4.30695 31.0807 4.35424 31.1298C4.44883 31.2278 4.58696 31.3707 4.76287 31.5521C5.11462 31.9149 5.61781 32.432 6.22618 33.0522C7.44131 34.2908 9.08342 35.9479 10.7802 37.6097C12.4668 39.2615 14.2497 40.9597 15.7348 42.2612C16.4686 42.9043 17.1973 43.5103 17.8406 43.9761C18.1562 44.2047 18.534 44.4601 18.9348 44.6754C19.155 44.7937 20.067 45.2989 21.246 45.2988L21.2458 37.2988C21.8329 37.2988 22.2563 37.439 22.4032 37.491C22.585 37.5555 22.6978 37.6157 22.721 37.6281C22.7649 37.6517 22.7112 37.6258 22.5323 37.4963C22.1866 37.246 21.6743 36.8291 21.0075 36.2447C19.6912 35.0911 18.0335 33.5158 16.3778 31.8943C14.7323 30.2826 13.1303 28.6662 11.937 27.4498C11.3411 26.8424 10.8489 26.3366 10.5064 25.9833C10.3351 25.8067 10.2014 25.6683 10.1109 25.5745C10.0656 25.5276 10.0312 25.4919 10.0083 25.4681C9.99686 25.4562 9.98829 25.4473 9.9827 25.4415C9.97991 25.4386 9.97786 25.4364 9.97656 25.4351C9.97591 25.4344 9.97546 25.4339 9.97519 25.4337C9.97505 25.4335 9.97499 25.4335 9.97493 25.4334C9.97491 25.4334 9.97495 25.4334 7.09087 28.2051ZM21.1934 18.1025C21.917 18.1025 22.4576 17.9045 22.6683 17.8212C22.9278 17.7185 23.1238 17.6094 23.2322 17.5455C23.4489 17.4178 23.6072 17.2966 23.6715 17.2465C23.8145 17.1352 23.9242 17.0344 23.9632 16.9985C24.0568 16.9122 24.1467 16.8226 24.1841 16.7854C24.3303 16.64 24.3153 16.6558 24.2805 16.6868L18.9612 10.7115C18.7809 10.872 18.5665 11.0895 18.5425 11.1133C18.4948 11.1608 18.5068 11.1478 18.5404 11.1169C18.5493 11.1086 18.6334 11.0303 18.7565 10.9344C18.8109 10.8921 18.9607 10.7769 19.1704 10.6533C19.2754 10.5914 19.4683 10.4839 19.7252 10.3822C19.9332 10.2999 20.4717 10.1025 21.1934 10.1025V18.1025ZM24.2805 16.6869C26.6229 14.6016 30.2198 14.6832 32.4676 16.9309L38.1244 11.2741C32.8624 6.01204 24.4506 5.82476 18.9612 10.7115L24.2805 16.6869ZM9.91929 16.9309C12.167 14.6832 15.7639 14.6016 18.1064 16.6869L23.4256 10.7115C17.9362 5.82481 9.52448 6.01203 4.26244 11.2741L9.91929 16.9309ZM18.1064 16.6869C18.0717 16.656 18.0568 16.6403 18.203 16.7857C18.2405 16.8229 18.3303 16.9124 18.424 16.9988C18.463 17.0347 18.5727 17.1355 18.7157 17.2468C18.78 17.2969 18.9383 17.418 19.1549 17.5456C19.2634 17.6095 19.4593 17.7186 19.7188 17.8213C19.9295 17.9046 20.4701 18.1025 21.1935 18.1025L21.1933 10.1025C21.915 10.1025 22.4534 10.2998 22.6615 10.3821C22.9183 10.4837 23.1112 10.5913 23.2161 10.6531C23.4259 10.7767 23.5756 10.8918 23.6301 10.9342C23.7531 11.03 23.8372 11.1083 23.8461 11.1166C23.8797 11.1475 23.8918 11.1605 23.8441 11.1131C23.8201 11.0892 23.6057 10.8718 23.4256 10.7115L18.1064 16.6869Z" fill="currentColor" mask="url(#path-1-inside-1)"/>
                </svg>
              </FavoriteButton>
            ) : (
              <FavoriteButton
                onClick={() => setFavorite((favorite) => !favorite)}
                animate={{ color: '#FFFFFF' }}
                transition={{ color:  { duration: 0 } }}
                type="button"
                >
                <svg
                  width="24" height="24"
                  viewBox="0 0 43 43" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <mask id="path-1-inside-1" fill="white">
                    <path d="M7.09086 14.1025C3.19655 17.9968 3.19655 24.3108 7.09087 28.2051C7.09087 28.2051 19.6742 41.2989 21.2459 41.2988C22.8176 41.2988 35.296 28.2051 35.296 28.2051C38.9962 24.4461 39.1903 17.9968 35.296 14.1025C31.5411 10.3476 25.5368 10.2132 21.6208 13.6992C21.4754 13.8286 21.2219 14.1025 21.1934 14.1025C21.1649 14.1025 20.9114 13.8286 20.766 13.6992C16.85 10.2132 10.8457 10.3476 7.09086 14.1025Z"/>
                  </mask>
                  <path d="M7.09087 28.2051L9.97495 25.4334L9.9474 25.4048L9.91929 25.3766L7.09087 28.2051ZM35.296 28.2051L32.4454 25.3991L32.4227 25.4221L32.4004 25.4455L35.296 28.2051ZM21.2459 41.2988L21.246 45.2988L21.2459 41.2988ZM21.1934 14.1025L21.1934 10.1025L21.1933 10.1025L21.1934 14.1025ZM21.6208 13.6992L18.9612 10.7115L18.9612 10.7115L21.6208 13.6992ZM20.766 13.6992L18.1064 16.6869L18.1064 16.6869L20.766 13.6992ZM9.91929 25.3766C7.58707 23.0444 7.58707 19.2631 9.91929 16.9309L4.26244 11.2741C-1.19398 16.7305 -1.19398 25.5771 4.26244 31.0335L9.91929 25.3766ZM32.4676 16.9309C34.7379 19.2012 34.6755 23.1335 32.4454 25.3991L38.1467 31.0111C43.3168 25.7587 43.6428 16.7924 38.1244 11.2741L32.4676 16.9309ZM21.246 45.2988C22.4278 45.2988 23.3405 44.7916 23.5622 44.672C23.9637 44.4554 24.3411 44.1987 24.6557 43.9696C25.297 43.5025 26.0221 42.8954 26.7512 42.2519C28.2268 40.9496 29.9969 39.2506 31.6704 37.5986C33.3542 35.9365 34.9832 34.2792 36.1886 33.0404C36.792 32.4202 37.2912 31.903 37.64 31.5402C37.8145 31.3587 37.9515 31.2158 38.0454 31.1177C38.0923 31.0687 38.1284 31.0309 38.153 31.0051C38.1653 30.9922 38.1748 30.9824 38.1812 30.9756C38.1845 30.9722 38.187 30.9696 38.1887 30.9677C38.1896 30.9668 38.1903 30.9661 38.1908 30.9656C38.191 30.9653 38.1912 30.9651 38.1914 30.965C38.1915 30.9648 38.1917 30.9646 35.296 28.2051C32.4004 25.4455 32.4004 25.4455 32.4004 25.4455C32.4003 25.4455 32.4003 25.4456 32.4001 25.4457C32.3999 25.446 32.3994 25.4465 32.3988 25.4472C32.3975 25.4485 32.3955 25.4506 32.3927 25.4535C32.3872 25.4594 32.3787 25.4682 32.3673 25.4801C32.3446 25.5039 32.3105 25.5396 32.2656 25.5865C32.1759 25.6803 32.0433 25.8186 31.8735 25.9952C31.5338 26.3484 31.0458 26.8542 30.4549 27.4615C29.2714 28.6778 27.6826 30.2939 26.0503 31.9053C24.4078 33.5267 22.7635 35.1012 21.4575 36.2539C20.7957 36.8379 20.288 37.2538 19.9461 37.5028C19.7691 37.6317 19.7172 37.6564 19.7632 37.6316C19.7875 37.6184 19.9016 37.5574 20.0849 37.4923C20.2337 37.4394 20.658 37.2988 21.2458 37.2988L21.246 45.2988ZM7.09087 28.2051C4.20678 30.9767 4.20691 30.9769 4.20709 30.977C4.20722 30.9772 4.20745 30.9774 4.20769 30.9777C4.20819 30.9782 4.20888 30.9789 4.20975 30.9798C4.21151 30.9816 4.21402 30.9843 4.21728 30.9876C4.2238 30.9944 4.23331 31.0043 4.24571 31.0172C4.27053 31.043 4.30695 31.0807 4.35424 31.1298C4.44883 31.2278 4.58696 31.3707 4.76287 31.5521C5.11462 31.9149 5.61781 32.432 6.22618 33.0522C7.44131 34.2908 9.08342 35.9479 10.7802 37.6097C12.4668 39.2615 14.2497 40.9597 15.7348 42.2612C16.4686 42.9043 17.1973 43.5103 17.8406 43.9761C18.1562 44.2047 18.534 44.4601 18.9348 44.6754C19.155 44.7937 20.067 45.2989 21.246 45.2988L21.2458 37.2988C21.8329 37.2988 22.2563 37.439 22.4032 37.491C22.585 37.5555 22.6978 37.6157 22.721 37.6281C22.7649 37.6517 22.7112 37.6258 22.5323 37.4963C22.1866 37.246 21.6743 36.8291 21.0075 36.2447C19.6912 35.0911 18.0335 33.5158 16.3778 31.8943C14.7323 30.2826 13.1303 28.6662 11.937 27.4498C11.3411 26.8424 10.8489 26.3366 10.5064 25.9833C10.3351 25.8067 10.2014 25.6683 10.1109 25.5745C10.0656 25.5276 10.0312 25.4919 10.0083 25.4681C9.99686 25.4562 9.98829 25.4473 9.9827 25.4415C9.97991 25.4386 9.97786 25.4364 9.97656 25.4351C9.97591 25.4344 9.97546 25.4339 9.97519 25.4337C9.97505 25.4335 9.97499 25.4335 9.97493 25.4334C9.97491 25.4334 9.97495 25.4334 7.09087 28.2051ZM21.1934 18.1025C21.917 18.1025 22.4576 17.9045 22.6683 17.8212C22.9278 17.7185 23.1238 17.6094 23.2322 17.5455C23.4489 17.4178 23.6072 17.2966 23.6715 17.2465C23.8145 17.1352 23.9242 17.0344 23.9632 16.9985C24.0568 16.9122 24.1467 16.8226 24.1841 16.7854C24.3303 16.64 24.3153 16.6558 24.2805 16.6868L18.9612 10.7115C18.7809 10.872 18.5665 11.0895 18.5425 11.1133C18.4948 11.1608 18.5068 11.1478 18.5404 11.1169C18.5493 11.1086 18.6334 11.0303 18.7565 10.9344C18.8109 10.8921 18.9607 10.7769 19.1704 10.6533C19.2754 10.5914 19.4683 10.4839 19.7252 10.3822C19.9332 10.2999 20.4717 10.1025 21.1934 10.1025V18.1025ZM24.2805 16.6869C26.6229 14.6016 30.2198 14.6832 32.4676 16.9309L38.1244 11.2741C32.8624 6.01204 24.4506 5.82476 18.9612 10.7115L24.2805 16.6869ZM9.91929 16.9309C12.167 14.6832 15.7639 14.6016 18.1064 16.6869L23.4256 10.7115C17.9362 5.82481 9.52448 6.01203 4.26244 11.2741L9.91929 16.9309ZM18.1064 16.6869C18.0717 16.656 18.0568 16.6403 18.203 16.7857C18.2405 16.8229 18.3303 16.9124 18.424 16.9988C18.463 17.0347 18.5727 17.1355 18.7157 17.2468C18.78 17.2969 18.9383 17.418 19.1549 17.5456C19.2634 17.6095 19.4593 17.7186 19.7188 17.8213C19.9295 17.9046 20.4701 18.1025 21.1935 18.1025L21.1933 10.1025C21.915 10.1025 22.4534 10.2998 22.6615 10.3821C22.9183 10.4837 23.1112 10.5913 23.2161 10.6531C23.4259 10.7767 23.5756 10.8918 23.6301 10.9342C23.7531 11.03 23.8372 11.1083 23.8461 11.1166C23.8797 11.1475 23.8918 11.1605 23.8441 11.1131C23.8201 11.0892 23.6057 10.8718 23.4256 10.7115L18.1064 16.6869Z" fill="currentColor" mask="url(#path-1-inside-1)"/>
                </svg>
              </FavoriteButton>
            )
          }
        </Favorite>
        <Info>
          <h2>Square One</h2>
          <h4>Coldplay</h4>
        </Info>
      </Box>
  )
}