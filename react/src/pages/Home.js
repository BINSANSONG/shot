import React from "react";
import ListExampleSelection from "../components/ListExampleSelection";
import Search from "../components/Search";
import Toggle from "../components/Toggle";
import DividerBar from "../components/DividerBar";
import ButtonExampleCircular from '../components/ButtonExampleCircular'


//app.use(express.static('public'));

class Home extends React.Component {


    render() {
        return (
            <div class="listpage">

                <h1>총있음 쐈다</h1>
                <div className="SettingButton">
                    <ButtonExampleCircular page={this.props.page} />
                </div>

                <Search />
                <DividerBar />
                <ListExampleSelection page={this.props.page} name={this.props.name}/>
                <DividerBar />
                <Toggle />

            </div>
        );
    }
}

export default Home;
