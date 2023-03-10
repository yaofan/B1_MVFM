import { initConfig } from "src/config";
import { loadShowDebugUI } from "./festivalMgmt/debugUI";
import { loadManageShow } from "./festivalMgmt/manageShow";
import { loadServerHandler } from "./festivalMgmt/serverHandler";
import { initShowTrigger } from "./festivalMgmt/showTrigger";
import { initRegistry, REGISTRY } from "./registry";

export async function bootStrapFestivalDropins(){
    initRegistry()
    const config = initConfig()
    loadManageShow()
    loadShowDebugUI()
    loadServerHandler()
    initShowTrigger(REGISTRY);
}

