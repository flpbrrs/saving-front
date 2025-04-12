import { useMemo } from "react";
import { Bar, BarChart, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface ChartProps {
    data: any
}

export default function ExpenseAnalyseChart({ data }: ChartProps) {

    const barColors = [
        "#EF4444",
        "#10B981",
        "#3B82F6",
        "#F59E0B",
        "#8B5CF6",
        "#EC4899",
        "#6366F1"
    ]

    const getColorForKey = (key: string) => {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = key.charCodeAt(i) + ((hash << 2) - hash);
        }
        return barColors[Math.abs(hash) % barColors.length];
    };

    const bgColors = useMemo(() => {
        if (!data || data.length === 0) return [];
        return Object.keys(data[0])
            .filter(key => key !== "name")
            .map(getColorForKey);
    }, [data]);

    const renderLegend = (props:any) => {
        const { payload } = props;
        return (
        <div className="flex items-center gap-4">
            {payload.map((entry:any, index:any) => (
                <div key={index}>
                    <div className="flex gap-1 items-center my-1">
                        <div className={`size-2 rounded-full`} style={{ background: entry.color}} />
                        <p className="text-sm text-zinc-400">{String(entry.dataKey).toLocaleUpperCase()}</p>
                    </div>
                    <p className="font-bold text-xs">
                        R$ {Number(data[0][entry.dataKey]).toFixed(2)}
                    </p>
                </div>
            ))}
        </div>
        );
    }

    if(Object.keys(data).length === 0) {
        return (
            <div className="h-16 text-sm py-2 text-zinc-400">
                Sem gastos esse mês! 💸
            </div>
        )
    }

    return (
        <ResponsiveContainer height={64} width={"100%"}>
            <BarChart
                layout="vertical"
                data={data}
                stackOffset="expand"
            >
                <YAxis hide type="category" dataKey="label" />
                <XAxis hide type="number" />
                <Legend 
                    content={renderLegend}
                    wrapperStyle={{ bottom: -4}}
                />
                {Object.keys(data[0])
                    .filter(key => key !== "name")
                    .map((key, index) => (
                        <Bar
                            key={key}
                            dataKey={key}
                            stackId="a"
                            fill={bgColors[index]}
                            radius={[10, 10, 10, 10]}
                        />
                ))}
            </BarChart>
        </ResponsiveContainer>
    )
}