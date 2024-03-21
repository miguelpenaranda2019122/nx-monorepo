import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import HomeScreenProps from './types';
import { Card } from '@to-do-components';

const ChangeLanguageScreen: React.FunctionComponent<HomeScreenProps> = ({navigation}) => {

    const { t, i18n } = useTranslation();
    const selectedLanguageCode = i18n.resolvedLanguage;

    const languages = [
        { label: 'en', name: t('english'), flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
        { label: 'es', name: t('spanish'), flag: "🇪🇸" },
        { label: 'pt', name: t('portuguese'), flag: "🇵🇹" }
    ];

    return (
        <View style={{ padding: 30, paddingHorizontal: 18, gap: 25 }}>
            {
                languages.map(lang => (
                    <Card
                        onPress={() => {
                            i18n.changeLanguage(lang.label);
                            navigation.goBack();
                        }}
                        title={lang.name}
                        leftField={`${lang.flag} ${lang.label.toLocaleUpperCase()} -`}
                        check={lang.label === selectedLanguageCode}
                        key={lang.label}/>
                ))
            }
        </View>
    )
}

export default ChangeLanguageScreen;