function Social() {
  const socialLinks = [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jubayar-ahamad-find/',
    },
    { label: 'GitHub', url: 'https://github.com/yet-yuvi' },
    { label: 'Profile', url: 'https://yet-yuvi.github.io/my-portfolio/' },
  ];

  return (
    <ul className="flex gap-4">
      {socialLinks.map((link) => (
        <li key={link.label}>
          <a
            className="relative pb-0.5 text-sky-600 font-medium after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-sky-600 after:transition-all after:duration-300 after:ease-in-out"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Social;
