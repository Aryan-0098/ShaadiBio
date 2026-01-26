import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { Biodata } from '@/lib/types';

// Register specific font if needed, otherwise use built-in Helvetica/Times
// For Phase 2 MVP, standard fonts are safest for file size and loading
// Font.register({ family: 'Inter', src: '...' });

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        fontFamily: 'Times-Roman',
        padding: 0,
    },
    decorativeCurve: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 300,
        height: 300,
        backgroundColor: '#FAF3E0',
        borderBottomLeftRadius: 150, // Approximation of rounded-bl-full
        opacity: 0.5,
    },
    header: {
        paddingTop: 60,
        paddingHorizontal: 48,
        paddingBottom: 32,
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#C5A045',
        textTransform: 'uppercase',
        marginBottom: 8,
        letterSpacing: 2,
    },
    subtitle: {
        fontSize: 10,
        textTransform: 'uppercase',
        color: '#6B7280', // gray-500
        marginBottom: 32,
        letterSpacing: 3,
    },
    divider: {
        width: 64,
        height: 4,
        backgroundColor: '#C5A045',
        marginBottom: 32,
    },
    photoContainer: {
        width: 160,
        height: 160,
        borderRadius: 80,
        borderWidth: 4,
        borderColor: '#FFFFFF',
        backgroundColor: '#F3F4F6', // gray-100
        overflow: 'hidden',
        marginBottom: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    photo: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    content: {
        paddingHorizontal: 48,
        flex: 1,
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 10,
        color: '#C5A045',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 12,
        letterSpacing: 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    sectionDot: {
        width: 4,
        height: 4,
        backgroundColor: '#C5A045',
        borderRadius: 2,
        marginRight: 8,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    label: {
        width: 120,
        fontSize: 10,
        color: '#9CA3AF', // gray-400
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    value: {
        fontSize: 11,
        color: '#1F2937', // gray-800
        flex: 1,
        fontWeight: 'medium',
    },
    footer: {
        marginTop: 48,
        paddingTop: 24,
        borderTopWidth: 1,
        borderTopColor: '#F3F4F6',
        textAlign: 'center',
        color: '#9CA3AF',
        fontSize: 9,
        fontStyle: 'italic',
        paddingBottom: 40,
    }
});

interface Props {
    data: Biodata;
}

export function BasicModernPdf({ data }: Props) {
    const { personalDetails, educationCareer, familyDetails } = data;

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.decorativeCurve} />

                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.title}>{personalDetails.fullName || 'Your Name'}</Text>
                    <Text style={styles.subtitle}>Biodata for Marriage</Text>

                    <View style={styles.divider} />

                    <View style={styles.photoContainer}>
                        {data.photos[0] ? (
                            <Image src={data.photos[0]} style={styles.photo} />
                        ) : null}
                    </View>
                </View>

                {/* Content */}
                <View style={styles.content}>
                    {/* Personal Details */}
                    <View style={styles.section}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
                            <View style={styles.sectionDot} />
                            <Text style={styles.sectionTitle}>Personal Details</Text>
                        </View>

                        <PdfRow label="Date of Birth" value={personalDetails.dateOfBirth || (personalDetails.age ? `${personalDetails.age} Years` : '')} />
                        <PdfRow label="Time of Birth" value={personalDetails.horoscope?.birthTime} />
                        <PdfRow label="Height" value={personalDetails.height} />
                        <PdfRow label="Religion / Caste" value={`${personalDetails.religion} ${personalDetails.caste ? `- ${personalDetails.caste}` : ''}`} />
                        <PdfRow label="Mother Tongue" value={personalDetails.motherTongue} />
                        <PdfRow label="Location" value={`${personalDetails.city}, ${personalDetails.state}`} />
                    </View>

                    {/* Education & Career */}
                    <View style={styles.section}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
                            <View style={styles.sectionDot} />
                            <Text style={styles.sectionTitle}>Education & Career</Text>
                        </View>
                        <PdfRow label="Education" value={educationCareer?.education} />
                        <PdfRow label="Details" value={educationCareer?.educationDetail} />
                        <PdfRow label="Occupation" value={educationCareer?.occupation} />
                        <PdfRow label="Company" value={educationCareer?.occupationDetail} />
                        <PdfRow label="Income" value={educationCareer?.income} />
                    </View>

                    {/* Family Details */}
                    <View style={styles.section}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
                            <View style={styles.sectionDot} />
                            <Text style={styles.sectionTitle}>Family Details</Text>
                        </View>
                        <PdfRow label="Father" value={familyDetails.fatherName + (familyDetails.fatherOccupation ? ` (${familyDetails.fatherOccupation})` : '')} />
                        <PdfRow label="Mother" value={familyDetails.motherName + (familyDetails.motherOccupation ? ` (${familyDetails.motherOccupation})` : '')} />
                        <PdfRow label="Siblings" value={familyDetails.siblings} />
                        <PdfRow label="Family Type" value={familyDetails.familyType ? `${familyDetails.familyType} Family` : ''} />
                    </View>

                    {/* Footer */}
                    <Text style={styles.footer}>Created with ShaadiBio</Text>
                </View>
            </Page>
        </Document>
    );
}

function PdfRow({ label, value }: { label: string, value?: string | null }) {
    if (!value) return null;
    return (
        <View style={styles.row}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
}
