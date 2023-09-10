// https://react-svgr.com/playground/
import * as React from 'react'

const Logo = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    style={{
      opacity: 1
    }}
    {...props}
  >
    <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" fill="currentColor">
      <path d="M75 231 c-45 -20 -70 -60 -70 -112 0 -42 5 -53 33 -81 28 -28 39 -33
      82 -33 43 0 54 5 82 33 28 28 33 39 33 82 0 42 -5 54 -31 81 -33 33 -92 46
      -129 30z m83 -43 c7 -7 12 -20 12 -29 0 -9 7 -19 15 -23 18 -7 20 -67 3 -84
      -16 -16 -120 -16 -136 0 -16 16 -16 120 0 136 7 7 30 12 53 12 23 0 46 -5 53
      -12z"/>
      <path d="M80 155 c0 -12 7 -15 25 -13 33 4 33 22 0 26 -18 2 -25 -1 -25 -13z"/>
      <path d="M70 90 c0 -14 45 -23 75 -16 42 11 28 26 -25 26 -27 0 -50 -4 -50
      -10z"/>
    </g>
  </svg>
)

export default Logo
