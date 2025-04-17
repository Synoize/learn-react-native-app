import { SectionList, Text, View } from "react-native"

const SectionListApp = () => {
    const sectionData = [
        {
            title: "Section - A",
            data: ["Section - A1", "Section - A2"]
        },
        {
            title: "Section - B",
            data: ["Section - B1", "Section - B2"]
        },
        {
            title: "Section - C",
            data: ["Section - C1", "Section - C2"]
        },
        {
            title: "Section - D",
            data: ["Section - D1", "Section - D2"]
        },
        {
            title: "Section - E",
            data: ["Section - E1", "Section - E2"]
        },
    ]

    const SectionComonent = ({ data }) => {
        console.log("Data : ", data);

        return (
            <View>
                <Text>{data.item}</Text>
            </View>
        )
    }

    const SectionHeader = ({section}) => {
        console.log("section : ", section);

        return <View>
            <Text style={{ backgroundColor: '#f4f4f4', padding: 4, marginTop: 20, color: 'blue' }}>{section.title}</Text>
        </View>
    }

    return (
        <View>
            <Text style={{fontSize: 20, textAlign: 'center', fontWeight: 'semibold'}}>Section List</Text>
            <SectionList sections={sectionData}
                renderItem={(data) => <SectionComonent data={data} />}
                renderSectionHeader={({ section }) => <SectionHeader section={section}/>}
            />

        </View>
    )
}

export default SectionListApp;