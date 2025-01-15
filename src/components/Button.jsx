import React from 'react'

const Button = ({ title, id, rightIcon, leftIcon, containerClass, href, onClick, target }) => {
  const Tag = href ? 'a' : 'button'; // Use 'a' if href is provided, otherwise 'button'

  return (
    <Tag
      id={id}
      href={href}
      target={target} // For external links
      onClick={onClick} // For handling button clicks
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon}

      <span className='relative inline-flex overflow-hidden font-general text-xs uppercase'>
        <div>
          {title}
        </div>
      </span>
      {rightIcon}
    </Tag>
  )
}

export default Button;
