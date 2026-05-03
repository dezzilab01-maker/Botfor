const client = require('..');

client.on('interactionCreate', async (interaction, msg) => {
    if (interaction.customId === "AUTOROLE1") {
        const roleId = (config["autorole"].rola1);
        const role = interaction.guild.roles.cache.get(roleId);

        if (interaction.member.roles.cache.has(roleId)) {
            interaction.member.roles.remove(role);
            interaction.reply({ content: `Zabrano rolę <@&${roleId}>`, ephemeral: true });
        } else {
            interaction.member.roles.add(roleId);
            interaction.reply({ content: `Nadano rolę <@&${roleId}>`, ephemeral: true });
        }
    }
    if (interaction.customId === "AUTOROLE2") {
        const roleId = (config["autorole"].rola2);
        const role = interaction.guild.roles.cache.get(roleId);

        if (interaction.member.roles.cache.has(roleId)) {
            interaction.member.roles.remove(role);
            interaction.reply({ content: `Zabrano rolę <@&${roleId}>`, ephemeral: true });
        } else {
            interaction.member.roles.add(roleId);
            interaction.reply({ content: `Nadano rolę <@&${roleId}>`, ephemeral: true });
        }
    }
    if (interaction.customId === "AUTOROLE3") {
        const roleId = (config["autorole"].rola3);
        const role = interaction.guild.roles.cache.get(roleId);

        if (interaction.member.roles.cache.has(roleId)) {
            interaction.member.roles.remove(role);
            interaction.reply({ content: `Zabrano rolę <@&${roleId}>`, ephemeral: true });
        } else {
            interaction.member.roles.add(roleId);
            interaction.reply({ content: `Nadano rolę <@&${roleId}>`, ephemeral: true });
        }
    }
    if (interaction.customId === "AUTOROLE4") {
        const roleId = (config["autorole"].rola4);
        const role = interaction.guild.roles.cache.get(roleId);

        if (interaction.member.roles.cache.has(roleId)) {
            interaction.member.roles.remove(role);
            interaction.reply({ content: `Zabrano rolę <@&${roleId}>`, ephemeral: true });
        } else {
            interaction.member.roles.add(roleId);
            interaction.reply({ content: `Nadano rolę <@&${roleId}>`, ephemeral: true });
        }
    }
    if (interaction.customId === "AUTOROLE5") {
        const roleId = (config["autorole"].rola5);
        const role = interaction.guild.roles.cache.get(roleId);

        if (interaction.member.roles.cache.has(roleId)) {
            interaction.member.roles.remove(role);
            interaction.reply({ content: `Zabrano rolę <@&${roleId}>`, ephemeral: true });
        } else {
            interaction.member.roles.add(roleId);
            interaction.reply({ content: `Nadano rolę <@&${roleId}>`, ephemeral: true });
        }
    }
})