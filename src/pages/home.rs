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
            <main>
            <div class="intro">
              <ul class="c-rainbow">
                <li class="c-rainbow__layer c-rainbow__layer--white">{"DIVY"}</li>
                <li class="c-rainbow__layer c-rainbow__layer--orange">{"DIVY"}</li>
                <li class="c-rainbow__layer c-rainbow__layer--red">{"DIVY"}</li>
                <li class="c-rainbow__layer c-rainbow__layer--violet">{"DIVY"}</li>
                <li class="c-rainbow__layer c-rainbow__layer--blue">{"DIVY"}</li>
                <li class="c-rainbow__layer c-rainbow__layer--green">{"DIVY"}</li>
                <li class="c-rainbow__layer c-rainbow__layer--yellow">{"DIVY"}</li>
              </ul>
            </div>
            <div class="tagline">
              {"All-Star Dev | Code Fanatic | Open sourcer | Bruh"}
            </div>
            <div class="icons-social">
              <a target="_blank" href="https://github.com/divy-work"
                ><i class="fab fa-github"></i
              ></a>
              <a target="_blank" href="https://twitter.com/undefined_void"
                ><i class="fab fa-twitter"></i
              ></a>
              <a target="_blank" href="https://stackoverflow.com/story/undefined_void"
                ><i class="fab fa-stack-overflow"></i
              ></a>
              <a target="_blank" href="https://medium.com/@dj.srivastava23"
                ><i class="fab fa-medium"></i
              ></a>
              <a target="_blank" href="https://instagram.com/divy.exe"
                ><i class="fab fa-instagram"></i
              ></a>
            </div>
          </main>
                }
    }
}

fn about_content() -> Html {
    html! {
    <div class="tagline">
      {"All-Star Dev | Code Fanatic | Open sourcer | Bruh"}
    </div>
    }
}
