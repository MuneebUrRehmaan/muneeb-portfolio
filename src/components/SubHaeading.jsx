import { Sparkles } from "lucide-react"
const SubHaeading = (props) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <Sparkles className="text-orange-500" size={20} />
      <span className="text-sm font-medium tracking-widest text-orange-500 uppercase">
        {props.subTitle}
      </span>
    </div>
  )
}

export default SubHaeading