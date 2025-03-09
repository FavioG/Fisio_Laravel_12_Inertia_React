interface GenderBadgeProps {
    gender: 'male' | 'female' | 'other';
}

export default function GenderBadge({ gender }: GenderBadgeProps) {
    const genderColors = {
        male: 'bg-blue-700/50 text-blue-200',
        female: 'bg-pink-700/50 text-pink-200',
        other: 'bg-purple-700/50 text-purple-200',
    };
    return (
        <span className={`inline-flex rounded-full px-2 text-xs font-semibold capitalize ${genderColors[gender] || 'bg-slate-700/50'}`}>
            {gender}
        </span>
    );
}
