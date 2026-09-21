function Social() {
  return (
    <ul className='flex gap-4'>
      <li>
        <a
          className='text-sky-500 hover:underline'
          href='https://www.linkedin.com/in/jubayar-ahamad-find/'
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkedIn
        </a>
      </li>
      <li>
        <a
          className='text-sky-500 hover:underline'
          href='https://github.com/yet-yuvi'
          target='_blank'
          rel='noopener noreferrer'
        >
          GitHub
        </a>
      </li>
      <li>
        <a
          className='text-sky-500 hover:underline'
          href='https://jubayar-portfolio.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Profile
        </a>
      </li>
    </ul>
  );
}

export default Social;