export default function Footer() {
  return (
    <footer className="bg-primary border-t border-gray-700 py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2026 Madhunisha Balajeyandhan. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://github.com/MadhunishaBala" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/madhunisha-balajeyandhan/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
              LinkedIn
            </a>
            <a href="https://medium.com/@Nisha_Bala" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
              Medium
            </a>
            <a href="https://learn.microsoft.com/en-us/users/madhunishabalajeyandhan-8887/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
              Microsoft Learn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
