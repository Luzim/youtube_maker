import React, {Component} from 'react';
import api from '../services/api';
import './BitmovinPlayer.css';
import {Progress} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';





    class BitmovinPlayer extends Component {
        state = {
            player: null,
        };
        playerConfig = {
            key: 'YOUR KEY HERE'
        };
        playerSource = {
            dash: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
            hls: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
            progressive: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4',
            poster: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/poster.jpg'
        };
        componentDidMount() {
            this.setupPlayer();
        }
        componentWillUnmount() {
            this.destroyPlayer();
        }
        setupPlayer() {
            const ReactDOM.render(
                <BitmovinPlayer/>,
                document.getElementById('player-wrapper')
            );player = new bitmovin.player.Player(document.getElementById('player'), this.playerConfig);
            player.load(this.playerSource).then(() => {
                this.setState({
                    ...this.state,
                    player
                });
                console.log('Successfully loaded source');
            }, () => {
                console.log('Error while loading source');
            });
        }
        destroyPlayer() {
            if (this.state.player != null) {
                this.state.player.destroy();
                this.setState({
                    ...this.state,
                    player: null
                });
            }
        }
        render() {
            return <div id="player" />;
        }
    }
    
export default BitmovinPlayer;