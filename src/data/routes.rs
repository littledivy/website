use yew_router::prelude::*;

#[derive(Switch, Debug, Clone)]
pub enum AppRoute {
    Home,
    #[to = "/"]
    Index,
}

pub type AppRouteAnchor = RouterAnchor<AppRoute>;
