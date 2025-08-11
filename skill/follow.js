"use strict";

const debug = require("debug")("bot-express:skill");
const Translation = require("../translation/translation");
let t;

/**
Skill to greet and give some initial instruction.
@class
*/
class SkillFollow {
    async begin(bot, event, context, resolve, reject){
        t = new Translation(bot.translator, context.sender_language);
        return resolve();
    }

    constructor(){
        this.clear_context_on_finish = true;
    }

    async finish(bot, event, context, resolve, reject){
        let message = {
            type: "text",
            text: await t.t(`follow_message`)
        }
        
        try {
            await bot.reply(message);
        } catch (e) {
            return reject(e);
        }

        return resolve();
    }
}

module.exports = SkillFollow;
