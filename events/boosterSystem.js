const client = require('..');
const booster = require('../models/boostSchema.js');

client.on("guildMemberUpdate", async (oldMember, newMember) => {
  const oldStatus = oldMember.premiumSince;
  const newStatus = newMember.premiumSince;

  console.log("Old Status:", oldStatus, "New Status:", newStatus);
  console.log("User IDs:", oldMember.id, newMember.id);

  // Jeśli użytkownik zaczyna boostować
  if (!oldStatus && newStatus) {
    console.log("Detected new boost");

    // Wyszukaj lub utwórz nowy dokument w bazie danych
    const booster_data = await booster.findOneAndUpdate(
      { UserID: newMember.id },
      { $inc: { Count: 1 } }, // Zwiększ Count o 1
      { new: true, upsert: true } // Utwórz dokument, jeśli nie istnieje
    );

    console.log("Updated booster data:", booster_data);

    // Jeśli użytkownik dał 2 boosty, nadaj rolę
    if (booster_data.Count === 2) {
      console.log("User has 2 boosts, adding role...");
      try {
        await newMember.roles.add("1331200008535543908");
        console.log("Role added successfully");
      } catch (err) {
        console.error("Error adding role:", err);
      }
    }
  }

  // Jeśli użytkownik przestaje boostować
  if (oldStatus && !newStatus) {
    console.log("Detected boost removal");

    // Znajdź użytkownika w bazie
    const booster_data = await booster.findOne({ UserID: newMember.id });

    if (booster_data) {
      console.log("Removing role and deleting data...");
      try {
        await newMember.roles.remove("1331200008535543908");
        await booster.deleteOne({ UserID: newMember.id });
        console.log("Role removed and data deleted successfully");
      } catch (err) {
        console.error("Error removing role or deleting data:", err);
      }
    } else {
      console.log("No booster data found for user.");
    }
  }
});
