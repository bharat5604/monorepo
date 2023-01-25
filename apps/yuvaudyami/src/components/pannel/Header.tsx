import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <div className='items-center justify-between flex w-full space-x-4 pb-3 pt-4 px-3'>
            <div>
                <img src="/logo.png" alt="yuva udami swaroggar" />
            </div>
        </div>
    </div>
  )
}

export default Header