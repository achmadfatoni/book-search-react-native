import React, {
    NavigatorIOS,
    StyleSheet,
    View,
    Text,
    Component
} from 'react-native';
import SearchBooks from './SearchBooks';

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
 
class Search extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
            title: 'Search Books',
            component: SearchBooks
        }}/>
        );
    }
}

module.exports = Search;