import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import HomeScreenProps from './types';

const ChangeLanguageScreen: React.FunctionComponent = ({ navigation }: HomeScreenProps) => {

    const { t, i18n } = useTranslation();
    const selectedLanguageCode = i18n.resolvedLanguage;

    const languages = [
        { label: 'en', name: t('english'), flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
        { label: 'es', name: t('spanish'), flag: "🇪🇸" },
        { label: 'pt', name: t('portuguese'), flag: "🇵🇹" }
    ];

    return (
        <>
            <Text>Languages</Text>
        </>
    )
}

export default ChangeLanguageScreen;