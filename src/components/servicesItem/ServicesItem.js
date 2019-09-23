import React, { Component } from "react"
import {  TouchableOpacity, View, Text, Animated , Image} from "react-native"
import styles from "./ServicesItem.style";
export default class ServicesItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isExpanded: false,
            heightSec: null
        }
        this.onClickHandle = this.onClickHandle.bind(this)
    }

    toggle() {
        const { isExpanded } = this.state
        this.setState({
            isExpanded: !isExpanded
        })
    }

    componentWillReceiveProps(nextProps) {
        this.state.isExpanded = nextProps.resetState
    }

    onClickHandle() {
        this.setState({
            isExpanded: true,
            animation: new Animated.Value()
        })
         //this.props.onPress(this.props.index)
    }

    onLayout(event) {
        const { height } = event.nativeEvent.layout
        this.setState({
            heightSec: height
        })
    }

    render() {
        return (
            <View>
                <View>
                {this.state.isExpanded ?
                    <TouchableOpacity onPress={this.onClickHandle && this.toggle.bind(this)} >
                        <Animated.View style={styles.sectionExpanded} onLayout={(event) => this.onLayout(event)}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>Flebo</Text>
                                <Image
                                    style={styles.buttonImage}
                                    source={require('../../../assets/images/arrowRotated2.png')}
                                />
                            </View>
                            <Text style={styles.textPrice}>Prezzo: da 20 a 25 €</Text>
                            <Text style={styles.textBody}>e usata per la somministrazione di farmaci o soluzioni fisioligiche(idratazione(.utile quando poiche si puo controllare la velocit di somministrazione e di conseguenza il tempo di infusione.</Text>
                        </Animated.View>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={this.onClickHandle}>
                        <Animated.View style={styles.sectionCollapsed}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>Flebo</Text>
                                <Image
                                    style={styles.buttonImage}
                                    source={require('../../../assets/images/arrow.png')}
                                />
                            </View>
                        </Animated.View>
                    </TouchableOpacity>
                }
                </View>
            </View>
        )
    }
}