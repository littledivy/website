use yew::prelude::*;

use crate::data::{AppRoute, AppRouteAnchor,LOGO_NAME};

pub struct Home;

impl Component for Home {
    type Message = ();
    type Properties = ();
    fn create(_: Self::Properties, _: ComponentLink<Self>) -> Self {
        Self {}
    }

    fn update(&mut self, _msg: Self::Message) -> ShouldRender {
        false
    }

    fn change(&mut self, _props: Self::Properties) -> ShouldRender {
        false
    }

    fn view(&self) -> Html {
        html! {
        <div class="home-content">
            <div class="home-content-section">
            <img
                class="home-profile"
                alt="profile"
                src="https://raw.githubusercontent.com/kamiyaa/kamiyaa.github.io/master/img/profile.jpg"/>
            </div>
        </div>
                }
    }
}

fn about_content() -> Html {
    html! {
    <div>
        <p>{ "Hi, my name is Jiayi Zhao (" }<b>{ "Jeff" }</b>{ ")." }
        <br/>
        { "I'm currently a 4th year student studying Computer Science at the "}<b>{ "University of Toronto" }</b>{ "." }
        <br/>
        { "I enjoy working with open source software, learning new technologies" }
        <br/>
        { "and coming up with innovative ways to solve problems." }
        <br/>
        </p>
        <p>{ "Feel free to look around!" }
        </p>
    </div>
        }
}
