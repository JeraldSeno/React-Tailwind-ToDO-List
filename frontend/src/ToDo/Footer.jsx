import myGithub from '/src/ToDo/github.svg'

export function Footer() {
    return (
        <div className="flex justify-center">
            <button className="h-7 mt-6 text-center w-fit">
                <a href="https://github.com/JeraldSeno/React-Tailwind-ToDO-List" target="_blank">
                    <img className="h-5" src={myGithub} alt="github" />
                </a>
            </button>
        </div>
    )
}