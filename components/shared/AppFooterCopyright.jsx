import { SocialLink, socialLinks } from "./SocialLink";
function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex flex-col space-y-4 md:space-y-0 md:flex-row justify-center md:justify-between items-center text-center">
			<div className="text-sm text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<a
					href="https://sirenuix.com"
					target="__blank"
					className="hover:underline capitalize hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					SirenUIX
				</a>
				.{' '}
				<a
					href="https://sirenuix.com"
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-medium capitalize hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Designers Platform
				</a>
			</div>
			<div>
			<ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className=" border text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:border-secondary-dark dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
              >
                <i className="text-sm">{link.icon}</i>
              </a>
            ))}
          </ul>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
