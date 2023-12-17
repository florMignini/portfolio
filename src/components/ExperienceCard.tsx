import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { IExperience } from ".";
export const ExperienceCard = ({
  title,
  icon,
  iconBg,
  company_name,
  date,
  points,
}: IExperience) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{
        borderRight: "4px solid #232631",
      }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={icon}
            alt={company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-lg font-bold">{title}</h3>
        <p
          className="text-secondary text-base font-semibold"
          style={{
            margin: 0,
          }}
        >
          {company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point: string, index: number) => (
          <li
            key={`point-${index}`}
            className="text-white-100 text-sm pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
