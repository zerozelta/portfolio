type SkillPorps = {

}
const Skill = ({ }: SkillPorps) => {
    return (
        <div className='flex gap-3'>
            <img src='/static/img/javascript-logo.png' className="w-[40px] h-[40px]" />
            <div>
                <div className="font-bold">JavaScript</div>
                <div className="flex text-xs gap-2">
                    <div>(Intermedio)</div>
                    <div>·</div>
                    <div>3 años</div>
                </div>
            </div>
        </div>
    );
}

export default Skill;