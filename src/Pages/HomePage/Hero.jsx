import Button from "../../components/Button/Button"

function Hero({
    assurance,
    focus,
    aim
}) {
    return (
        <>
            <div className="pt-[150px]">
                <p className="text-[#3A3A3A] text-[14px] font-[400] text-center">{assurance}</p>
                <h1 className="Grotesk text-[64px] text-[#3A125B] font-[400] text-center leading-[75px] pt-3 hero__focus">{focus}</h1>
                <p className="text-[#000000] text-[18px] font-[500] text-center leading-[29px] pt-6">{aim}</p>
                <div className="flex justify-center mt-8">
                    <div className="flex gap-6">
                        <Button
                            label="Start Trading"
                            type="button"
                            styles="border border-[#3A125B] bg-[#3A125B] rounded-[5px] px-[40px] py-[10px] text-[#fff] font-[500] text-[18px] text-center hero__btn__left"
                        />
                        <Button
                            label="Help Video"
                            type="button"
                            styles="border border-[#3A125B] rounded-[5px] px-[40px] py-[10px] text-[#3A125B] font-[500] text-[18px] text-center hero__btn__right"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero