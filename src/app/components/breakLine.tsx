
export function BreakLine() {

    return (
        <div className="flex justify-between w-full items-center h-6 my-4">
            <hr className="h-1 w-[45%]" />
            <svg className="w-5 h-4" fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
                <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
                />
            </svg>
            <hr className="h-1 w-[45%]" />
        </div>
    )
}