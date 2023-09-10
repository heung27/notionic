import Link from 'next/link'
import BLOG from '@/blog.config'

const Social = () => {
  return (
    <div className='flex gap-4'>
    
      <Link
        href={`${BLOG.socialLink.github}`}
        scroll={false}
        target='_blank'
        aria-label='Github'
        className='text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100'
      >
        <svg
          className='w-5 h-5'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path fill='none' d='M0 0h24v24H0z' />
          <path d='M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z' />
        </svg>
      </Link>

      <Link
        href={`${BLOG.socialLink.linkedin}`}
        scroll={false}
        target='_blank'
        aria-label='Linkedin'
        className='text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100'
      >
        <svg
          className='w-5 h-5'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" fill="currentColor" >
            <path d="M9 224 c-10 -12 -10 -20 -2 -34 8 -11 8 -21 2 -27 -6 -6 -9 -43 -7
            -84 l3 -74 30 0 30 0 2 77 c1 43 -3 80 -8 83 -5 3 -3 14 3 25 13 20 -3 50 -27
            50 -7 0 -18 -7 -26 -16z m41 -19 c0 -8 -7 -15 -15 -15 -8 0 -15 7 -15 15 0 8
            7 15 15 15 8 0 15 -7 15 -15z m0 -125 c0 -56 -3 -70 -15 -70 -12 0 -15 14 -15
            70 0 56 3 70 15 70 12 0 15 -14 15 -70z"/>
            <path d="M85 162 c-3 -3 -5 -41 -5 -84 l0 -78 29 0 c29 0 30 2 33 53 2 38 7
            52 18 52 11 0 16 -14 18 -52 3 -51 4 -53 33 -53 l29 0 0 65 c0 86 -16 104 -94
            103 -30 0 -58 -3 -61 -6z m40 -22 c5 -8 11 -7 20 0 8 6 26 10 42 8 27 -3 28
            -5 31 -71 2 -53 0 -68 -10 -65 -8 3 -14 25 -16 54 -4 56 -12 69 -40 59 -17 -5
            -22 -16 -24 -58 -2 -38 -7 -52 -18 -52 -12 0 -16 15 -18 68 -2 54 0 67 12 67
            8 0 18 -5 21 -10z"/>
          </g>
        </svg>
      </Link>

    </div>
  )
}

export default Social
