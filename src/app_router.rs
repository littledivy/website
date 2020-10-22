use wasm_bindgen::prelude::*;
use yew::prelude::*;
use yew_router::prelude::*;

use crate::data::AppRoute;
use crate::pages;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

pub struct AppRouter;

impl Component for AppRouter {
    type Message = AppRoute;
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
        let render_func = Router::render(|switch: AppRoute| match switch {
            AppRoute::Index => html! {
                <pages::Home/>
            },
            AppRoute::Home => html! {
                <pages::Home/>
            },
        });

        html! {
            <Router<AppRoute, ()>
                render = render_func
            />
        }
    }
}
