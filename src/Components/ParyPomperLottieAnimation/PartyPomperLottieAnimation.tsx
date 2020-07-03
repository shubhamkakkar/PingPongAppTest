import {StyleSheet} from "react-native";

imort React from 'react'
import AnimatedLottieView from "lottie-react-native";
import styles from "../PlayersWins/PlayerWin/playerWinStyleSheet";
import partyLottie from '../../assets/partyLottie.json';
import React from "react";


export default function PartyPomperLottieAnimation() {
    return <AnimatedLottieView
        style={styles.lottie}
        source={partyLottie}
        progress={progress}
        loop
    />
}
